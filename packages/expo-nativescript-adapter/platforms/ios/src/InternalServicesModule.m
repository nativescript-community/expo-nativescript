#import "InternalServicesModule.h"
#import <UMCore/UMModuleRegistry.h>
#import <UMCore/UMModuleRegistryProvider.h>
#import <UMCore/UMAppLifecycleListener.h>
#import <UMCore/UMEventEmitter.h>

@interface InternalServicesModule ()

@property (nonatomic, strong) NSMutableSet<id<UMAppLifecycleListener>> *lifecycleListeners;
@property (nonatomic, assign) BOOL isForegrounded;

@end

@implementation InternalServicesModule

UM_REGISTER_MODULE();

#pragma mark UMInternalModule impl

- (instancetype)init {
    if (self = [super init]) {
        _lifecycleListeners = [NSMutableSet set];
        _isForegrounded = false;
    }
    return self;
}

+ (const NSArray<Protocol *> *)exportedInterfaces {
    return @[@protocol(UMEventEmitterService), @protocol(UMAppLifecycleService)];
}

# pragma mark UMEventEmitterService impl

- (void)sendEventWithName:(NSString *)eventName body:(id)body {
    // TODO
}

#pragma mark UMAppLifecycleService impl


- (void)registerAppLifecycleListener:(id<UMAppLifecycleListener>)listener {
  [_lifecycleListeners addObject:listener];
}

- (void)unregisterAppLifecycleListener:(id<UMAppLifecycleListener>)listener {
  [_lifecycleListeners removeObject:listener];
}

- (void)setAppStateToBackground
{
  if (_isForegrounded) {
    [_lifecycleListeners enumerateObjectsUsingBlock:^(id<UMAppLifecycleListener>  _Nonnull obj, BOOL * _Nonnull stop) {
      [obj onAppBackgrounded];
    }];
    _isForegrounded = false;
  }
}

- (void)setAppStateToForeground
{
  if (!_isForegrounded) {
    [_lifecycleListeners enumerateObjectsUsingBlock:^(id<UMAppLifecycleListener>  _Nonnull obj, BOOL * _Nonnull stop) {
      [obj onAppForegrounded];
    }];
    _isForegrounded = true;
  }
}



@end
