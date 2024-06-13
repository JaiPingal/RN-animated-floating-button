#ifdef __cplusplus
#import "rn-animated-floating-button.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnAnimatedFloatingButtonSpec.h"

@interface RnAnimatedFloatingButton : NSObject <NativeRnAnimatedFloatingButtonSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnAnimatedFloatingButton : NSObject <RCTBridgeModule>
#endif

@end
