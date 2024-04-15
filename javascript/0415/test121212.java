import java.util.Scanner;

class master {
  public static void main(String[] args) {  
    Scanner sc = new Scanner(System.in);
    int x = 0, y = 0  , ans = 0;

    while (true) {
      
      System.out.print("곱하실 첫번째 수를 입력하세요 : ");
      x = sc.nextInt();
      System.out.print("곱하실 두번째 수를 입력하세요 : ");
      y = sc.nextInt();
      ans = x * y;
  
      System.out.println("두 수의 곱은 '" + ans + "' 입니다.");
    }

  }
}


















