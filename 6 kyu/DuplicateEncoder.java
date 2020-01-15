import java.util.HashMap;

public class DuplicateEncoder{
    public static void main(String[] args) {
        String word = "Paolo";
        String encodedWord = encode(word);

        System.out.println("The encoded word is: "+encodedWord);
    }

    public static String encode(String word){
        word = word.toLowerCase();
        HashMap<String, Integer> occurenceCounter = new HashMap<String, Integer>();
        String returingString = "";

        //Create the HashMap that for every letter associate as a value the number occurrences
        for (int i=0;i<word.length();i++){
            String key = String.valueOf(word.charAt(i));

            if(occurenceCounter.get(key) == null)
                occurenceCounter.put(String.valueOf(word.charAt(i)),1);
            else
                occurenceCounter.put(key, occurenceCounter.get(key)+1);
        }

        for (int i=0;i<word.length();i++){
            String key = String.valueOf(word.charAt(i));
            if(occurenceCounter.get(key) == 1)
                returingString += "(";
            else
                returingString += ")";
        }

        return returingString;
    }
}