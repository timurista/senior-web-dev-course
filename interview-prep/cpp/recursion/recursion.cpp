#include <iostream>
using namespace std;

int sum(int n) {
  if (n == 1) {
    return n;
  } 
  return n + sum(n-1);
}

bool isSymetric(int l, int r, int arr[]) {
  if (l >= r) {
    return true;
  } else if (arr[l] != arr[r]) {
    return false;
  }
  return isSymetric(l+1, r-1, arr);
}

int factorial(int n) {
  if (n<= 1) return 1;
  return n * factorial(n-1);
}

int main() {
  cout << sum(5) << endl;
  int arr1[5] = {5,4,3,4,5};
  cout << boolalpha << isSymetric(0, 4, arr1)  << endl;
  cout << factorial(5) << endl;
  return 0;
}