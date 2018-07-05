#ReactKit

ReactKit是一个整合了React、Redux、React-Router的脚手架，
减少开发新的UI项目的时候重复搭建脚手架的时间

#目录结构

public:存放静态资源文件

src/actions:存放redux的action

src/components:存放基础组件,按照组件类别块划分存放目录

src/constants:存放action的type名字，和一些其他固定的常量

src/containers:存放容器，需要绑定Redux的都需要在此处创建容器，路由上的组件需要指向这个文件夹的容器

src/reducers:存放redux的reducers

src/routes:存放路由配置

src/store:存放redux的Store配置，一般不需要改

src/store:工具类