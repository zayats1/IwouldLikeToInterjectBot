import dev.kord.core.Kord
import dev.kord.core.entity.ReactionEmoji
import dev.kord.core.event.message.MessageCreateEvent
import dev.kord.core.on
import dev.kord.gateway.Intent
import dev.kord.gateway.PrivilegedIntent
import kotlinx.coroutines.delay

suspend fun main() {
    println("IWouldLikeToInterjectBot")

    val kord = Kord(ClassLoader.getSystemResource(".botToken").readText())
    val pingPong = ReactionEmoji.Unicode("\uD83C\uDFD3")

    kord.on<MessageCreateEvent> {
        val linux = "linux".toRegex(RegexOption.IGNORE_CASE)

        val interject = "I'd just like to interject for a moment".toRegex(RegexOption.IGNORE_CASE)
        val match2 =   interject.find(message.content)

        if (match2 != null){
            return@on
        }

        val match = linux.find(message.content) ?: return@on

        val response = message.channel.createMessage(ClassLoader.getSystemResource("MyResponse.txt").readText())
        response.addReaction(pingPong)
    }

    kord.login()
}

