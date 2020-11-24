#import <UMCore/UMInternalModule.h>
#import <UMCore/UMAppLifecycleService.h>
#import <UMCore/UMEventEmitterService.h>

@interface InternalServicesModule : NSObject<UMInternalModule, UMEventEmitterService, UMAppLifecycleService>

@end
