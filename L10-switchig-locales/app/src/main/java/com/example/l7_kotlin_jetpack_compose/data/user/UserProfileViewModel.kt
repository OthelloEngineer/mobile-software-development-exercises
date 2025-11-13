package com.example.l7_kotlin_jetpack_compose.data.user

import androidx.lifecycle.ViewModel
import com.example.l7_kotlin_jetpack_compose.R

class UserProfileViewModel(repository: UserRepository) : ViewModel() {
    private val userRepository = repository
    private var currentUser = User(
        "Placeholder",
        "User",
        listOf("Cool interest"),
        R.drawable.cool_image,
        "no user selected",
        "no user selected"
    )

    fun getCurrent() = this.currentUser

    fun setUser(name: String) {
        val user = userRepository.getUser(name)
        if (user != null) {
            currentUser = user.copy(
                profilePicture = mapProfilePicture(user.profilePicture)
            )
        }
    }

    fun getAllUsers(): List<User> {
        return userRepository.getAllUsers().map { user ->
            user.copy(profilePicture = mapProfilePicture(user.profilePicture))
        }
    }

    private fun mapProfilePicture(profilePicture: Int): Int {
        return when (profilePicture) {
            1 -> R.drawable.cool_image
            else -> R.drawable.cool_image
        }
    }
}