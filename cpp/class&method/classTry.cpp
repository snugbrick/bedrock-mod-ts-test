#include "classT.h"
#include <iostream>

using namespace std;

int main() {
  cout << "class test" << endl;
  FirTry fir;
  fir.add(-1);
  fir.print();
  return 0;
}
void FirTry::add(int much) {
  much = check(much);
  money += much;
}
void FirTry::print() { cout << money << endl; }