import logging
from telegram import Update, ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

# ===== SOZLAMALAR =====
TOKEN = "8242174403:AAHu6q5DXCxrNkFTC4XLMWG03DFGJAyfQLE" 
SITE_URL = "https://savdomarkaz.netlify.app"       # Sizning saytingiz

# Logging sozlash
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

# ===== JAVOB FUNKSIYALARI =====

# 1. /start buyrug'i
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Tugma yaratish (Saytga o'tish)
    keyboard = [
        [InlineKeyboardButton("🛍 Saytga o'tish", url=SITE_URL)],
        [InlineKeyboardButton("📞 Aloqa", url="https://t.me/savdomarkazbot")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        f"👋 *Assalomu alaykum, {update.effective_user.first_name}!*\n\n"
        "🛍 **Savdo Markaz**ga xush kelibsiz!\n\n"
        "Bizda:\n"
        "✅ Kiyimlar\n"
        "✅ Oziq-ovqat\n"
        "✅ Texnika\n"
        "✅ Uy-ro'zg'or buyumlari\n\n"
        "Saytimizga o'tish uchun pastdagi tugmani bosing 👇",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# 2. /help buyrug'i
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "ℹ️ *Yordam bo'limi*\n\n"
        "Mavjud buyruqlar:\n"
        "/start - Bosh sahifa\n"
        "/catalog - Mahsulotlar katalogi\n"
        "/contact - Biz bilan bog'lanish\n"
        "/help - Ushbu yordam xabari\n\n"
        "Savollaringiz bo'lsa, @admin_username ga yozishingiz mumkin.",
        parse_mode='Markdown'
    )

# 3. /catalog buyrug'i
async def catalog(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [[InlineKeyboardButton("📦 Katalogni ko'rish", url=SITE_URL)]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "📦 *Bizning mahsulotlarimiz*\n\n"
        "50+ turdagi mahsulotlar mavjud. Batafsil ko'rish uchun saytga o'ting:",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# 4. /contact buyrug'i
async def contact(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "📞 *Aloqa ma'lumotlari*\n\n"
        "📍 Manzil: Toshkent shahri\n"
        "📞 Telefon: +998 90 123 45 67\n"
        "📧 Email: info@savdomarkaz.uz\n"
        "🌐 Sayt: savdomarkaz.netlify.app"
    )

# 5. Har qanday boshqa xabarga avto-javob
async def auto_reply(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_name = update.effective_user.first_name
    text = update.message.text
    
    # Agar xabar juda qisqa bo'lsa yoki salom bo'lsa
    if text.lower() in ['salom', 'hello', 'hi', 'assalom']:
        await update.message.reply_text(
            f"👋 Assalomu alaykum, {user_name}! \n"
            "Sizga qanday yordam bera olaman? \n"
            "Buyruqlardan foydalaning: /start, /catalog, /help"
        )
    else:
        # Oddiy avto-javob
        await update.message.reply_text(
            f"Rahmat, {user_name}! 🙏\n\n"
            "Xabaringiz qabul qilindi. \n"
            "Operatorimiz tez orada siz bilan bog'lanadi. \n\n"
            "Hozircha katalogimizni ko'rishingiz mumkin: /catalog",
            reply_to_message_id=update.message.message_id
        )

# ===== ASOSIY QISM =====
def main():
    # Ilovani ishga tushirish
    application = Application.builder().token(TOKEN).build()
    
    # Buyruqlarni qo'shish
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("catalog", catalog))
    application.add_handler(CommandHandler("contact", contact))
    
    # Matnli xabarlarni qo'lga olish (barcha boshqa xabarlar)
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, auto_reply))
    
    print("✅ Bot ishga tushdi... To'xtatish uchun Ctrl+C bosing.")
    application.run_polling()

if __name__ == '__main__':
    main()