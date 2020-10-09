package com.rickandmorty;

import com.facebook.react.ReactActivity;

/* Splash Screen */
import org.devio.rn.splashscreen.SplashScreen; 
import android.graphics.drawable.Drawable;
import androidx.annotation.Nullable;
import androidx.core.content.ContextCompat;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;
/* end Splash Screen */

public class MainActivity extends ReactActivity {

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
     return BuildConfig.APP_NAME;
  }
}
