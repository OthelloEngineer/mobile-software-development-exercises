package com.example.l7_kotlin_jetpack_compose.presentation.screens

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.l7_kotlin_jetpack_compose.R

@Composable
fun LocaleDemo() {
    val context = LocalContext.current

    Surface(
        modifier = Modifier.fillMaxSize(),
        color = MaterialTheme.colorScheme.background
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = "Locale Switching Demo",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.padding(bottom = 32.dp)
            )

            Card(
                modifier = Modifier.fillMaxWidth(),
                elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    LocaleItem(
                        label = "App Name:",
                        value = context.getString(R.string.app_name)
                    )

                    Divider()

                    LocaleItem(
                        label = "Greeting:",
                        value = context.getString(R.string.greeting)
                    )

                    Divider()

                    LocaleItem(
                        label = "Welcome:",
                        value = context.getString(R.string.welcome)
                    )

                    Divider()

                    LocaleItem(
                        label = "Friends:",
                        value = context.getString(R.string.friends)
                    )

                    Divider()

                    LocaleItem(
                        label = "Description:",
                        value = context.getString(R.string.description)
                    )

                    Divider()

                    LocaleItem(
                        label = "Interests:",
                        value = context.getString(R.string.interests)
                    )

                    Divider()

                    LocaleItem(
                        label = "Profile:",
                        value = context.getString(R.string.profile)
                    )

                    Divider()

                    LocaleItem(
                        label = "Messages:",
                        value = context.getString(R.string.messages)
                    )

                    Divider()

                    LocaleItem(
                        label = "Settings:",
                        value = context.getString(R.string.settings)
                    )

                }
            }
        }
    }
}

@Composable
fun LocaleItem(label: String, value: String) {
    Column {
        Text(
            text = label,
            fontSize = 14.sp,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
            text = value,
            fontSize = 20.sp,
            fontWeight = FontWeight.Medium,
            modifier = Modifier.padding(top = 4.dp)
        )
    }
}
