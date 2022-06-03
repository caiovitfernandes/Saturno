package model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Tarefa {
	private String id;
	private Date dataLimite;
	private String nome;
	private String idUsuario;
	SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
	
	public Tarefa() throws ParseException {
		id = "-1";
		dataLimite = sdf.parse("01/01/1900");
		nome = "?";
		idUsuario = "-1";
	}

	public Tarefa(String id, String dataLimite, String nome, String idUsuario) throws ParseException {
		this.setId(id);
		this.setDataLimite(dataLimite);
		this.setNome(nome);
		this.setIdUsuario(idUsuario);
	}		
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getDataLimite() {
		return sdf.format(dataLimite);
	}

	public void setDataLimite(String dataLimite) throws ParseException {
		this.dataLimite = sdf.parse(dataLimite);
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getIdUsuario() {
		return idUsuario;
	}
	
	public void setIdUsuario(String idUsuario) {
		this.idUsuario = idUsuario;
	}
	

	public String toString() {
		return "Id: " + getId() + " Nome: "+ getNome() + " Data Limite: " + getDataLimite() + " Id Usuario: " + getIdUsuario();
	}
	
	public boolean equals(Object obj) {
		return (this.getId() == ((Tarefa) obj).getId());
	}	
}