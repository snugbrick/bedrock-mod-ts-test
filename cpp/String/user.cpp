#include "String.h"
#include <iostream>
using namespace std;
int main() {
  {
    String newStr("hi im john");
    cout << newStr.checkStrNum() << endl;

    String newStr2("hi im john2");
    cout << newStr2.checkStrNum() << endl;

    String newStr3("hi im john3");
    cout << newStr3.checkStrNum() << endl;

    String newStr4("hi im john4");
    cout << newStr4.checkStrNum() << endl;
  }
  {
    String newStr5("hi im john5");
    cout << newStr5.checkStrNum() << endl;

    String ne2Str6 = newStr5;
    cout << ne2Str6.checkStrNum() << endl;

    String ne2Str7 = newStr5;
    cout << ne2Str7.checkStrNum() << endl;
  }
  return 0;
}