window.BENCHMARK_DATA = {
  "lastUpdate": 1629265261767,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
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
          "id": "ca19c77809b2a7ebc750e283777e6dce1cf39381",
          "message": "Merge pull request #281 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-182f0ef\n\n⬆️ Bump python from `74f44a8` to `182f0ef` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c20998b",
          "timestamp": "2021-08-18T05:32:45Z",
          "tree_id": "f9de06dbc11c95d29d4e028b2eea2fb98f5204f9"
        },
        "date": 1629265259299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 315.973050189463,
            "unit": "iter/sec",
            "range": "stddev: 0.00035590781567983106",
            "extra": "mean: 3.1648268717866364 msec\nrounds: 117"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 901.8194092141765,
            "unit": "iter/sec",
            "range": "stddev: 0.00016292848290874477",
            "extra": "mean: 1.1088694585442287 msec\nrounds: 796"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1759.7598042245006,
            "unit": "iter/sec",
            "range": "stddev: 0.00011367354421449586",
            "extra": "mean: 568.2593713070318 usec\nrounds: 711"
          }
        ]
      }
    ]
  }
}