import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'chaining-repro';

	form = this.fb.group({
		test: [new Date(), Validators.required]
	})

	constructor(private fb: FormBuilder) {

	}

	public a?= {
		fn(_: any) {
			return true;
		}
	}

	test(e: any) {
		console.log(this.form.get('test')?.value, e);
	}
}
