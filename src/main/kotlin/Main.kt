import dev.kord.core.Kord
import dev.kord.core.entity.ReactionEmoji
import dev.kord.core.event.message.MessageCreateEvent
import dev.kord.core.on

const val LINUX = "Linux"
const val I_WOULD_LIKE_TO_INTERJECT = "I'd just like to interject for a moment"

const val PENGUIN_EMOJI = "\uD83D\uDC27"
const val GNU_EMOJI = "\uD83D\uDC03"

fun toEmoji(unicode: String) = ReactionEmoji.Unicode(unicode)

fun isFound(input: String, expected: String): Boolean {
    val expectedRegex = expected.toRegex(RegexOption.IGNORE_CASE)
    expectedRegex.find(input) ?: return false
    return true
}

suspend fun main() {
    val bot = Kord(ClassLoader.getSystemResource(".botToken").readText())

    bot.on<MessageCreateEvent> {
        val content = message.content

        if (isFound(content, I_WOULD_LIKE_TO_INTERJECT)) {
            return@on
        }
        if (isFound(content, LINUX)) {
            val response = message.channel.createMessage(ClassLoader.getSystemResource("MyResponse.txt").readText())
            message.addReaction(toEmoji(PENGUIN_EMOJI))
            message.channel.createMessage(GNU_EMOJI)
        }
        return@on
    }

    bot.login()
}

