public class BitCounting{

    public static int countBits(int n){
        String binary = ""+Integer.toString(n,2);
        int numberOfOnes = 0;

        for (int i=0;i<binary.length();i++)
            if(binary.charAt(i) == '1')
                numberOfOnes++;

       return numberOfOnes;

    }

    public static void main(String[] args) {
        int numero = 1234;
        String binary = ""+Integer.toString(numero,2);
        System.out.println(binary);
    }
}