#include "String.h"
#include <cstring>
#include <iostream>
using namespace std;

int String::String_Num = 0;

String::String(const char *s) {
  len = std::strlen(s);
  _stringBody = new char[len + 1];
  std::strcpy(_stringBody, s);
  String_Num++;
   cout << "Im String" << endl;
}
String::~String() {
  delete[] _stringBody;
  cout << "Im ~String" << endl;
  String_Num--;
}
int String::checkLen() { return len; }
int String::checkStrNum() { return String_Num; }