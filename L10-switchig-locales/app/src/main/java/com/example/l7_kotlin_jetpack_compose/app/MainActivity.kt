package com.example.l7_kotlin_jetpack_compose.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.example.l7_kotlin_jetpack_compose.presentation.screens.LocaleDemo
import com.example.l7_kotlin_jetpack_compose.presentation.theme.L7kotlinjetpackcomposeTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            L7kotlinjetpackcomposeTheme(
                dynamicColor = false
            ) {
                LocaleDemo()
            }
        }
    }
}
