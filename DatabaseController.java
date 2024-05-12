import java.sql.*;



public class DatabaseController {
    

    public Connection connect() {

        String url = "jdbc:mysql://localhost:3306/hoopfuldb";
        String userName = "root";
        String pass = "cs380";

        try {
            //try connecting to the database
            Connection con = DriverManager.getConnection(url, userName, pass);
            //place holder print for successful connection
            System.out.println("success!");
            return con;
        } catch (SQLException e) {
            //place holder catch
            e.printStackTrace();
        }


        return null;

    }

    public void insertPlayer(String pID, String tID, String pName) {

        try {
        //conect to the database using the connect method
        Connection con = connect();




        String add = "INSERT INTO players (playerID, teamID, playerName) VALUES (?,?,?);";
        
        PreparedStatement ps = con.prepareStatement(add);

        ps.setString(1, pID);
        //NEED ERROR CHECKING FOR TEAM ID AS WILL BE FOREIGN KEY
        ps.setString(2, tID);
        ps.setString(3, pName);
        ps.execute();

        } catch (Exception e) {
            e.printStackTrace();
            
        }



    }

    public void createTeam(String tID, String tName, int amountPlayers, String captainID, String captainName) {

        try {
            //conect to the database using the connect method
            Connection con = connect();
    
    
    
    
            String add = "INSERT INTO players (teamID, teamName, amountOfPlayers, captainID, captainName) VALUES (?,?,?,?,?);";
            
            PreparedStatement ps = con.prepareStatement(add);
            //NEED ERROR CHECKING FOR CAPTAIN ID AS WILL BE FOREIGN KEY
            ps.setString(1, tID);
            
            ps.setString(2, tName);
            ps.setInt(3, amountPlayers);
            ps.setString(4, captainID);
            ps.setString(5, captainName);
            
            ps.execute();
    
            } catch (Exception e) {
                e.printStackTrace();
                
            }
    
    
    
        }
    
        public void createCaptain(String captainID, String captainName, String teamID, String userName, String pass) {

            try {
                //conect to the database using the connect method
                Connection con = connect();
    
    
    
                String add = "INSERT INTO captain (captainID, captainName, teamID, userName, pass) VALUES (?,?,?,?,?);";
                
                PreparedStatement ps = con.prepareStatement(add);
                //NEED ERROR CHECKING FOR USERNAME AND PASS AS WILL BE FOREIGN KEY
                ps.setString(1, captainID);
                ps.setString(2, captainName);
                ps.setString(3, teamID);
                ps.setString(4, userName);
                ps.setString(5, pass);
                
                ps.execute();
    
                } catch (Exception e) {
                    e.printStackTrace();
                    
                }
            
        }

        public void createAccount(String userName, String pass) {

            try {
                //conect to the database using the connect method
                Connection con = connect();

                String add = "INSERT INTO account (userName, pass) VALUES (?,?);";
                
                PreparedStatement ps = con.prepareStatement(add);
                
                ps.setString(1, userName);
                ps.setString(2, pass);
                
                ps.execute();
    
                } catch (Exception e) {
                    e.printStackTrace();
                    
                }
        }
    


}