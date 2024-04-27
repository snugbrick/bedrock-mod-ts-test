#ifndef String_h_
#define String_h_

class String {
private:
  static int String_Num;
  char *_stringBody;
  int len;

public:
  String(const char *s);
  String(const String &s);
  ~String();
  int checkLen();
  int checkStrNum();
  char *getString();
  // String &operator=(const String &thatString);
};

#endif