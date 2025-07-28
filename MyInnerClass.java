import java.awt.*;
import java.applet.*;
import java.awt.event.*;
class MyInnerClass implements Runnable
{
public void run()
{
System.out.println("Hello");
}
class DemoClass
{
public static void main(String[] arg)
{
MyInnerClass my=new MyInnerClass();
Thread th=new Thread(my);
my.start();
}
}
}