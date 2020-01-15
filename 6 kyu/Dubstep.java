public class Dubstep {

  public static void main(String[] args) {
    String encodedSong = "RWUBWUBWUBLWUB";
    String decodedSong = SongDecoder(encodedSong);
    System.out.println("final song: "+decodedSong);
  }

  public static String SongDecoder (String song)
  {
     song = song.replace("WUB"," ").replaceAll("\\s{2,}", " ");

    return song.trim();
   }
}
