module ArrayTest;
import System;

names = new ["Johny", "Calvin", "Clara"];
System.print(names[0]);
System.print(names[1]);
System.print(names[2]);
names[101] = "Geert";
number = 101;
System.print(names[number]);
System.print(names[101]);
System.print("Array length: "+names.length);

object = new {};
object.name = "MyObject";
System.print(object["name"]);