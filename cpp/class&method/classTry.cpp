#include "classT.h"
#include <iostream>

using namespace std;

int main() {
  {
    cout << "class test" << endl;
    FirTry fir = FirTry(-114);
    FirTry fir2 = FirTry(-10);
    // fir = fir2; // fir2 mumber to fir
    fir.print();

    FirTry newFir = fir.maximun(fir2);
    newFir.print();

    cout << "========================================" << endl;
    FirTry f1(114514);
    FirTry f2(1919810);
    FirTry f3 = f1 & f2;
    f3.print();
  }
  return 0;
}
void FirTry::add(int much) {
  much = check(much);
  _money += much;
}
const FirTry &FirTry::maximun(const FirTry &ft2) const {
  if (ft2._money > this->_money)
    return ft2;
  else
    return *this;
}