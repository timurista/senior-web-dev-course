/**
 * Definition for a point.
 * struct Point {
 *     int x;
 *     int y;
 *     Point() : x(0), y(0) {}
 *     Point(int a, int b) : x(a), y(b) {}
 * };
 */

#include <iostream>
#include <vector>
#include <string>

using namespace std;

struct Point
{
  int x;
  int y;
  Point() : x(0), y(0) {}
  Point(int a, int b) : x(a), y(b) {}
};

int maxPoints(vector<Point> &points)
{
  cout << "hello world";
  return 4;
}

int main()
{
  Point point(1, 2);
  Point point1(2, 2);
  Point point2(3, 3);
  vector<Point> ps = {point, point1, point2};
  maxPoints(ps);
  return 0;
}