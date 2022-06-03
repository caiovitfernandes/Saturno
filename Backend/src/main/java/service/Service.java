package service;

import java.util.Scanner;

import org.eclipse.jetty.util.security.Credential.MD5;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.time.LocalDate;
import java.io.File;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.List;

import dao.TarefaDAO;
import dao.UsuarioDAO;
import model.Tarefa;
import model.Usuario;
import spark.Request;
import spark.Response;


public class Service {

	private UsuarioDAO usuarioDAO = new UsuarioDAO();
	private TarefaDAO tarefaDAO = new TarefaDAO();
	private final int FORM_INSERT = 1;
	private final int FORM_DETAIL = 2;
	private final int FORM_UPDATE = 3;
	private final int FORM_ORDERBY_ID = 1;
	private final int FORM_ORDERBY_DESCRICAO = 2;
	private final int FORM_ORDERBY_PRECO = 3;
	private Usuario usuarioCorrente = null;
	
	public static String criptografar(String pwd) throws NoSuchAlgorithmException {
		MessageDigest md = MessageDigest.getInstance("MD5");
        if (md != null) {
            return new String(hexCodes(md.digest(pwd.getBytes())));
        }
        return null;
}
	
	private static char[] hexCodes(byte[] text) {
        char[] hexOutput = new char[text.length * 2];
        String hexString;

        for (int i = 0; i < text.length; i++) {
            hexString = "00" + Integer.toHexString(text[i]);
            hexString.toUpperCase().getChars(hexString.length() - 2,
                                    hexString.length(), hexOutput, i * 2);
        }
        return hexOutput;
}
	
	
	public boolean insertUsuario(Request request, Response response) throws ParseException, NoSuchAlgorithmException{
		String id = request.params(":id");
		String nome = request.params(":nome");
		String senha = request.params(":senha");
		char genero = request.params(":genero").charAt(0);
		String email = request.params(":email");
		String dataNasc = request.params(":dataNasc");
		
		boolean resp;
		
		Usuario usuario = new Usuario(id, nome, criptografar(senha), genero, email, dataNasc, 0, 0);
		
            resp = usuarioDAO.insert(usuario);
			
		return resp;
	}
	
	public boolean updateUsuario(Request request, Response response) throws NoSuchAlgorithmException, ParseException {
		String id = request.params(":id");
		String nome = request.params(":nome");
		String senha = request.params(":senha");
		char genero = request.params(":genero").charAt(0);
		String email = request.params(":email");
		String dataNasc = request.params(":dataNasc");
		
		Usuario usuario = new Usuario(id, nome, criptografar(senha), genero, email, dataNasc, 0, 0);
		
		boolean resp = usuarioDAO.update(usuario);
		
		return resp;
	}
	
	public boolean deleteUsuario(Request request, Response response) {
		String id = request.params(":id");
		Boolean resp = usuarioDAO.delete(id);
		return resp;
	}
	
	public boolean insertTarefa(Request request, Response response) throws ParseException {
			String id = request.params(":id");
			String data_limite = request.params(":data_limite");
			String nome = request.params(":nome");
			String idUsuario = usuarioCorrente.getId();
			
			Tarefa tarefa = new Tarefa(id, data_limite, nome, idUsuario);
			
			boolean resp = tarefaDAO.insert(tarefa);
			
			return resp;
	}
	
	public boolean updateTarefa(Request request, Response response) throws ParseException {
		String id = request.params(":id");
		String data_limite = request.params(":data_limite");
		String nome = request.params(":nome");
		String idUsuario = usuarioCorrente.getId();
		
		Tarefa tarefa = new Tarefa(id, data_limite, nome, idUsuario);
		
		boolean resp = tarefaDAO.update(tarefa);
		
		return resp;
}
	
	public boolean deleteTarefa(Request request, Response response) {
		String id = request.params(":id");
		Boolean resp = usuarioDAO.delete(id);
		return resp;
	}
	
	public String getTarefabyUserId(Request request, Response response) {
		List<Tarefa> tarefas = tarefaDAO.getByUser(usuarioCorrente.getId());
		
		JSONArray tarefasJSON = new JSONArray();
		
		for(int i = 0; i < tarefas.size(); i++) {
			Tarefa t = tarefas.get(i);
			JSONObject JsonObj = new JSONObject();
			JsonObj.put("Id", t.getId());
			JsonObj.put("Titulo", t.getNome());
			JsonObj.put("Data", t.getDataLimite());
			
			tarefasJSON.add(JsonObj);
		}
		return tarefasJSON.toJSONString();
	}
	
	
	
	public String login(Request request, Response response) throws ParseException, NoSuchAlgorithmException {
		String senha = request.params(":senha");
		String email = request.params(":email");
		usuarioCorrente  = usuarioDAO.Login(email, criptografar(senha));
		System.out.println(usuarioCorrente);
		
		if(usuarioCorrente != null) {
			return "Sim";
		}
		else {
			return "Não";
		}
	}
	
	public String logOut() {
		usuarioCorrente = null;
		return "Deslogado com sucesso!";
	}
}

	
	