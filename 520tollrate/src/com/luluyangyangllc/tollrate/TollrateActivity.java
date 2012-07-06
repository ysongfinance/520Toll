package com.luluyangyangllc.tollrate;

import android.os.Bundle;
import android.widget.LinearLayout;

import org.apache.cordova.*;
import com.google.ads.*;
public class TollrateActivity extends DroidGap {
    /** Called when the activity is first created. */
	    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.main);
        super.loadUrl("file:///android_asset/www/520tollrate.html");
        
   
    }
}