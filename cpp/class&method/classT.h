#include <iostream>
#ifndef CLASS_LOANG
#define CLASS_LOANG 10
#endif

using namespace std;

class FirTry {
private:
  int money; // private by defalt
  int check(int much) {
    if (much < 0) {
      cout << "y u much is a negative?" << endl;
      return 0;
    }
    return much;
  }

public:
  void add(int much);
  void print();
};
