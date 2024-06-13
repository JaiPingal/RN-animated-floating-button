package com.rnanimatedfloatingbutton;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;

abstract class RnAnimatedFloatingButtonSpec extends ReactContextBaseJavaModule {
  RnAnimatedFloatingButtonSpec(ReactApplicationContext context) {
    super(context);
  }

  public abstract void multiply(double a, double b, Promise promise);
}
