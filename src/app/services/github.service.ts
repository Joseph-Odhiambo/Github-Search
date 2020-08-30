import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class GithubService {
  private username = "Joseph-Odhiambo";
  private client_id = "610d1f9d354fe2b25366";
  private client_secret = environment.apiKey;

  constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos" +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}
