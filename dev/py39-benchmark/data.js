window.BENCHMARK_DATA = {
  "lastUpdate": 1628534353085,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a907a81dc3b60ae015b43efb403abd65be616544",
          "message": ":pushpin: Pin `actions/checkout` version in `auto-merge` job\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6fcea7e",
          "timestamp": "2021-08-09T18:19:28Z",
          "tree_id": "35f6443b1f0923f5a67de433754dc13b67cb37ff"
        },
        "date": 1628533862880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 321.84569908720306,
            "unit": "iter/sec",
            "range": "stddev: 0.00012211239833045132",
            "extra": "mean: 3.107078959998944 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 925.3254467333271,
            "unit": "iter/sec",
            "range": "stddev: 0.00006565678432452842",
            "extra": "mean: 1.0807008534459916 msec\nrounds: 928"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1993.9301170810907,
            "unit": "iter/sec",
            "range": "stddev: 0.00003489453918231614",
            "extra": "mean: 501.5220901843328 usec\nrounds: 754"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "fa58366f36b9b5af83f984b1123126f335a14583",
          "message": "Merge pull request #278 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-74f44a8\n\n⬆️ Bump python from `5f8d373` to `74f44a8` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@34f48ec",
          "timestamp": "2021-08-09T18:23:23Z",
          "tree_id": "08d8456c3e63cff0ea96b8d4d66032eb451fcdbe"
        },
        "date": 1628534350242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 313.2523111842535,
            "unit": "iter/sec",
            "range": "stddev: 0.00003214114155270726",
            "extra": "mean: 3.192314834707811 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 887.708361105667,
            "unit": "iter/sec",
            "range": "stddev: 0.00002125726490209014",
            "extra": "mean: 1.1264960924266505 msec\nrounds: 779"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1888.0731338426992,
            "unit": "iter/sec",
            "range": "stddev: 0.00001763564614033471",
            "extra": "mean: 529.6405007176554 usec\nrounds: 697"
          }
        ]
      }
    ]
  }
}