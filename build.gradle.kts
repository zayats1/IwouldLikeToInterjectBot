plugins {
    kotlin("js") version "1.6.21"
}

group = "org.zayats1"
version = "0.1"

repositories {
    jcenter()
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
}

kotlin {
    js(IR) {
        binaries.executable()
        nodejs {

        }
    }
}