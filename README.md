## Cocos Creator初体验

[下载地址](http://www.cocos.com/download)



## 编辑器界面

### 资源管理器

新建文件结构，资源排版处理

### 层级管理器

与PS相关，图层越是在下面，则盖住上面的

### 属性检查器

修改层级管理器中的元素的属性

### 工具栏

浏览器预览与模拟器预览

### 场景编辑器

所见即所得

### 控制台

显示编辑信息的地方

## Scene介绍

### Scene

Scene是ccc中必不可以少的元素，游戏中需要构建不同的场景，游戏里关卡，板块切换就是一个个场景之间的切换

### Director

Director是整个ccc的核心，是整个游戏的导航仪。游戏中的一些常用的操作就是由Director来控制的。初始化，场景切换，游戏暂停继续

```
cc.director.loadScene('场景名称');
cc.director.preloadScene('场景名称');
This.node.on(xx,xx)
```

