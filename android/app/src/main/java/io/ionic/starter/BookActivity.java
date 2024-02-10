package io.ionic.starter;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.cermati.webviewcapacitorplugin.WebViewCapacitorPlugin;

public class BookActivity extends AppCompatActivity {
    WebView webView;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_book);


        getSupportActionBar().hide();

        Intent intent = getIntent();
        String url = intent.getStringExtra(WebViewCapacitorPlugin.EXTRA_URL);

        webView = findViewById(R.id.story_view);
        WebViewClient webViewClient = new WebViewClient();
        WebSettings webSettings = webView.getSettings();

        webSettings.setJavaScriptEnabled(true);
        webView.setWebViewClient(webViewClient);
        webView.loadUrl("file:///android_asset/public"+url);
    }
}