#include <iostream>
using namespace std;

void workspace(int arr[], int n) {
  // oh of n
  for (int i=n-1; i>=0;i--) {
    cout << arr[i]<<" ";
  }
}

void square(int n) {
  for (int i=0; i<n; i++) {
    for (int j =0; j<n; j++) {
      if(i==0 || i==n-1 || j==0 || j==n-1) {
        cout<<"*";
      } else {
        cout<<" ";
      }
    }
    cout<<endl;
  }
}

void comb(int i, int n, int arr[]) {
  if(i == n) {
    for(int l = 0; l < n; l++) {
      cout<<arr[l]<<" ";
    }
    cout<<endl;
    return;    
  }
  arr[i] = 0;
  comb(i+1, n, arr);
  arr[i] = 1;
  comb(i+1, n, arr);
  arr[i] = 0;
}

int main() {
  int arr[] = {1,2,3,4,5};
  // workspace(arr, 5);
  square(5);
  int arr2[5];
  comb(0, 5, arr2);
}
