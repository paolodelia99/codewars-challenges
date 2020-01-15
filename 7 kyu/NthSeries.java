import java.lang.Math;

public class NthSeries{
    public static void main(String[] args) {
        int n = 5;
        double double1 = 1.2563453;
        System.out.println(double1);
        String nhtEl = seriesSum(n);
        System.out.println(nhtEl);
    }

    public static String seriesSum(int n){
        double result = 0.00000;

        if(n == 0)
            return "0.00";
        else{
            for(int i=1;i<=n;i++){
                double a = (1/(i+(2*(i-1))));
                result += a;
            }

            return ""+result;
        }
    }
}