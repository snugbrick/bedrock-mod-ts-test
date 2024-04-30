#include <glad/glad.h>
#include <iostream>
#include <GLFW/glfw3.h>

void printHi();

int main() {
  std::cout << "Hello world!" << std::endl;
  printHi();
}
void printHi() {
  using std::cout;
  using std::endl;

  cout << "Hi" << endl;
}