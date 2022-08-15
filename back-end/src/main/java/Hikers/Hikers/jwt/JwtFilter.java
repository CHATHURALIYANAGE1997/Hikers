package Hikers.Hikers.jwt;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Objects;


@Component
public class JwtFilter  extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomerUserDetailsService service;

    Claims claims=null;
    private String username=null;
    private String role=null;


    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        if(httpServletRequest.getServletPath().matches("/user/login|/user/forgotPassword|/user/signup|/user/signuphotel|" +
                "/user/signuptransportprovider|/user/signupequipmentprovider|/user/signuptraveling")){
            filterChain.doFilter(httpServletRequest,httpServletResponse);
        }else {
            String authorizationHeader=httpServletRequest.getHeader("Authorization");
            String token=null;

            if(authorizationHeader!=null && authorizationHeader.startsWith("Bearer ")){
                token=authorizationHeader.substring(7);
                username=jwtUtil.extractUserName(token);
                claims=jwtUtil.extractAllClaims(token);
            }
            if (username!=null&& SecurityContextHolder.getContext().getAuthentication()==null){
                UserDetails userDetails=service.loadUserByUsername(username);
          
                if(jwtUtil.validateToken(token,userDetails)){
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }
            }
            filterChain.doFilter(httpServletRequest,httpServletResponse);
        }
    }

    public boolean isAdmin(){
        return "Admin".equalsIgnoreCase((String) claims.get("role"));
    }

    public boolean isUser(){
        return "User".equalsIgnoreCase((String) claims.get("role"));
    }

    public boolean isHotel(){
        return "Hotel".equalsIgnoreCase((String) claims.get("role"));
    }

    public boolean isEquprovider(){
        return "Equprovider".equalsIgnoreCase((String) claims.get("role"));
    }

    public boolean isTraprovider(){
        return "Traprovider".equalsIgnoreCase((String) claims.get("role"));
    }

    public boolean isTravelguide(){
        return "Travelguide".equalsIgnoreCase((String) claims.get("role"));
    }

    public boolean isCoAdmin(){
        return "Co-Admin".equalsIgnoreCase((String) claims.get("role"));
    }

    public String getCurrentUser(){
        return username;
    }

    public String getCurrentUserRole(){
        return role;
    }


}





// package Hikers.Hikers.jwt;

// import io.jsonwebtoken.Claims;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import javax.servlet.FilterChain;
// import javax.servlet.ServletException;
// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpServletResponse;
// import java.io.IOException;


// @Component
// public class JwtFilter  extends OncePerRequestFilter {

//     @Autowired
//     private JwtUtil jwtUtil;

//     @Autowired
//     private CustomerUserDetailsService service;

//     Claims claims=null;
//     private String username=null;


//     @Override
//     protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
//         if(httpServletRequest.getServletPath().matches("/user/login|/user/forgotPassword|/user/signup")){
//             filterChain.doFilter(httpServletRequest,httpServletResponse);
//         }else {
//             String authorizationHeader=httpServletRequest.getHeader("Authorization");
//             String token=null;

//             if(authorizationHeader!=null && authorizationHeader.startsWith("Bearer ")){
//                 token=authorizationHeader.substring(7);
//                 username=jwtUtil.extractUserName(token);
//                 claims=jwtUtil.extractAllClaims(token);
//             }
//             if (username!=null&& SecurityContextHolder.getContext().getAuthentication()==null){
//                 UserDetails userDetails=service.loadUserByUsername(username);
//                 if(jwtUtil.validateToken(token,userDetails)){
//                     UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
//                     usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
//                     SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//                 }
//             }
//             filterChain.doFilter(httpServletRequest,httpServletResponse);
//         }
//     }

// public boolean isAdmin(){
//         return "Admin".equalsIgnoreCase((String) claims.get("role"));
//     }

//     public boolean isUser(){
//         return "User".equalsIgnoreCase((String) claims.get("role"));
//     }

//     public boolean isHotel(){
//         return "Hotel".equalsIgnoreCase((String) claims.get("role"));
//     }

//     public boolean isEquprovider(){
//         return "Equprovider".equalsIgnoreCase((String) claims.get("role"));
//     }

//     public boolean isTraprovider(){
//         return "Traprovider".equalsIgnoreCase((String) claims.get("role"));
//     }

//     public boolean isTravelguide(){
//         return "Travelguide".equalsIgnoreCase((String) claims.get("role"));
//     }

//     public boolean isCoAdmin(){
//         return "Co-Admin".equalsIgnoreCase((String) claims.get("role"));
//     }

//     public String getCurrentUser(){
//         return username;
//     }

//     public String getCurrentUserRole(){
//         return role;
//     }


// }

