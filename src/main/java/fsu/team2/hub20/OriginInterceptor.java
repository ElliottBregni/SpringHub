package fsu.team2.hub20;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class OriginInterceptor extends HandlerInterceptorAdapter {

	  @Override
	  public boolean preHandle(HttpServletRequest request,
	                           HttpServletResponse response, Object handler)
	    throws Exception {
	    response.setHeader("Access-Control-Allow-Origin", "*");
	    response.setHeader("Access-Control-Allow-Methods",
	                       "GET, POST, PUT, DELETE, OPTIONS");
	    return true;
	  }
	}