package com.example.l7_kotlin_jetpack_compose.data.user

import com.example.l7_kotlin_jetpack_compose.R

class UserRepository {
    private val users = listOf(
        User(
            name = "Alice",
            lastName = "Johnson",
            interestNames = listOf("Kotlin", "Jetpack Compose", "Android Development"),
            profilePicture = 1,
            quote = "Code is poetry",
            description = "Android developer passionate about clean architecture and modern UI frameworks"
        ),
        User(
            name = "Bob",
            lastName = "Smith",
            interestNames = listOf("Mobile Development", "UI/UX Design", "Testing"),
            profilePicture = 1,
            quote = "Make it work, make it right, make it fast",
            description = "Full-stack mobile developer with focus on user experience"
        ),
        User(
            name = "Charlie",
            lastName = "Brown",
            interestNames = listOf("Kotlin", "Architecture", "Performance"),
            profilePicture = 1,
            quote = "Simplicity is the ultimate sophistication",
            description = "Senior engineer specializing in scalable Android applications"
        )
    )

    fun getUser(name: String): User? {
        println("Looking for user: $name")
        return users.find { it.name == name }
    }

    fun getAllUsers(): List<User> {
        println("Getting all users: ${users.map { it.name }}")
        return users
    }
}