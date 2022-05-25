plugins {
    kotlin("js") version "1.6.21"
}

group = "org.zayats1"
version = "0.1"

repositories {
    mavenCentral()
    // Kord Snapshots Repository (Optional):
    maven("https://oss.sonatype.org/content/repositories/snapshots")
}

dependencies {
    testImplementation(kotlin("test"))
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
    implementation("dev.kord:kord-core:0.8.0")
}

kotlin {
    js(IR) {
        binaries.executable()
        nodejs {

        }
    }
}