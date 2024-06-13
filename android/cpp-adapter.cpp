#include <jni.h>
#include "rn-animated-floating-button.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_rnanimatedfloatingbutton_RnAnimatedFloatingButtonModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return rnanimatedfloatingbutton::multiply(a, b);
}
