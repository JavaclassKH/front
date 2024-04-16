package javaPractice;
import java.util.Scanner;

class master {
  public static void main(String[] args) {  
    Scanner sc = new Scanner(System.in);
    int x = 0, y = 0  , ans = 0;
    boolean run = true;

    while (run) {
      System.out.print("곱하실 첫번째 수를 입력하세요 : ");
      x = sc.nextInt();
      if(x == 999) run = false;
      System.out.print("곱하실 두번째 수를 입력하세요 : ");
      y = sc.nextInt();
      ans = x * y;

  
      System.out.println("두 수의 곱은 '" + ans + "' 입니다.");

      for(int i=0; i<=9; i++) {
        System.out.println(i+"번: " + i);
      }
    }
    System.out.println("시스템 종료");
  }
}


















