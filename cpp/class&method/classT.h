#pragma once
#include <iostream>
#ifndef CLASS_LOANG
#define CLASS_LOANG 10
#endif

using namespace std;

class FirTry {
private:
  int _money; // private by defalt
  int check(int much) {
    if (much < 0) {
      cout << "y u much is a negative?" << endl;
      return 0;
    }
    return much;
  }

public:
  FirTry(int money) { _money = money; }; // auto inline
  ~FirTry() { std::cout << "bye" << std::endl; }
  void add(int much);
  void print() { cout << _money << endl; };

  const FirTry& maximun(const FirTry &ft2) const;
};
