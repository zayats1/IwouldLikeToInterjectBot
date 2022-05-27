import dev.kord.core.Kord
import dev.kord.core.entity.ReactionEmoji
import dev.kord.core.event.message.MessageCreateEvent
import dev.kord.core.on

const val LINUX = "Linux"

const val PENGUIN_EMOJI = "\uD83D\uDC27"
const val GNU_EMOJI = "\uD83D\uDC03"

fun toEmoji(unicode: String) = ReactionEmoji.Unicode(unicode)

fun getResource(name:String) = (ClassLoader.getSystemResource(name).readText())

fun isFound(input: String, expected: String): Boolean {
    val expectedRegex = expected.toRegex(RegexOption.IGNORE_CASE)
    expectedRegex.find(input) ?: return false
    return true
}

suspend fun main() {
    val bot = Kord(getResource(".botToken"))

    bot.on<MessageCreateEvent> {
        val content = message.content

        // ignore other bots
        if (message.author?.isBot != false) return@on

        if (isFound(content, LINUX)) {
            message.channel.createMessage(getResource("MyResponse.txt"))
            message.channel.createMessage(GNU_EMOJI)
            message.addReaction(toEmoji(PENGUIN_EMOJI))
        }
        return@on
    }

    bot.login()
}

