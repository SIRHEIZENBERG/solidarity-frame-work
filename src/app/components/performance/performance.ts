import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance.html',
  styleUrl: './performance.css',
})
export class Performance {
  selectedYear: number = 2024;

  stats = [
    { number: '98%', label: 'Pass Rate' },
    { number: '45', label: 'Straight A Students' },
    { number: '87%', label: 'A & B Grades' },
    { number: '#1', label: 'Regional Ranking' },
  ];

  years = [2024, 2023, 2022];

  performers2024 = [
    {
      rank: 1,
      name: 'Amara Mwangi',
      initials: 'AM',
      class: 'Grade 8A',
      marks: '498/500',
      average: '99.6%',
      grade: 'A+',
    },
    {
      rank: 2,
      name: 'David Kamau',
      initials: 'DK',
      class: 'Grade 8B',
      marks: '495/500',
      average: '99.0%',
      grade: 'A+',
    },
    {
      rank: 3,
      name: 'Sarah Ochieng',
      initials: 'SO',
      class: 'Grade 8A',
      marks: '492/500',
      average: '98.4%',
      grade: 'A+',
    },
    {
      rank: 4,
      name: 'James Wanjiru',
      initials: 'JW',
      class: 'Grade 8C',
      marks: '489/500',
      average: '97.8%',
      grade: 'A',
    },
    {
      rank: 5,
      name: 'Grace Njeri',
      initials: 'GN',
      class: 'Grade 8A',
      marks: '487/500',
      average: '97.4%',
      grade: 'A',
    },
    {
      rank: 6,
      name: 'Emmanuel Mutua',
      initials: 'EM',
      class: 'Grade 8B',
      marks: '485/500',
      average: '97.0%',
      grade: 'A',
    },
    {
      rank: 7,
      name: 'Lucy Akinyi',
      initials: 'LA',
      class: 'Grade 8C',
      marks: '483/500',
      average: '96.6%',
      grade: 'A',
    },
    {
      rank: 8,
      name: 'Michael Kariuki',
      initials: 'MK',
      class: 'Grade 8A',
      marks: '481/500',
      average: '96.2%',
      grade: 'A',
    },
    {
      rank: 9,
      name: 'Ruth Otieno',
      initials: 'RO',
      class: 'Grade 8B',
      marks: '479/500',
      average: '95.8%',
      grade: 'A',
    },
    {
      rank: 10,
      name: 'Peter Ngugi',
      initials: 'PN',
      class: 'Grade 8C',
      marks: '477/500',
      average: '95.4%',
      grade: 'A',
    },
  ];

  performers2023 = [
    {
      rank: 1,
      name: 'Faith Wambui',
      initials: 'FW',
      class: 'Grade 8A',
      marks: '496/500',
      average: '99.2%',
      grade: 'A+',
    },
    {
      rank: 2,
      name: 'Brian Omondi',
      initials: 'BO',
      class: 'Grade 8B',
      marks: '493/500',
      average: '98.6%',
      grade: 'A+',
    },
    {
      rank: 3,
      name: 'Catherine Njoroge',
      initials: 'CN',
      class: 'Grade 8A',
      marks: '490/500',
      average: '98.0%',
      grade: 'A+',
    },
    {
      rank: 4,
      name: 'Samuel Maina',
      initials: 'SM',
      class: 'Grade 8C',
      marks: '487/500',
      average: '97.4%',
      grade: 'A',
    },
    {
      rank: 5,
      name: 'Mercy Auma',
      initials: 'MA',
      class: 'Grade 8B',
      marks: '485/500',
      average: '97.0%',
      grade: 'A',
    },
    {
      rank: 6,
      name: 'John Kipchoge',
      initials: 'JK',
      class: 'Grade 8A',
      marks: '483/500',
      average: '96.6%',
      grade: 'A',
    },
    {
      rank: 7,
      name: 'Nancy Adhiambo',
      initials: 'NA',
      class: 'Grade 8C',
      marks: '481/500',
      average: '96.2%',
      grade: 'A',
    },
    {
      rank: 8,
      name: 'Daniel Kibet',
      initials: 'DK',
      class: 'Grade 8B',
      marks: '479/500',
      average: '95.8%',
      grade: 'A',
    },
    {
      rank: 9,
      name: 'Esther Wanjiku',
      initials: 'EW',
      class: 'Grade 8A',
      marks: '477/500',
      average: '95.4%',
      grade: 'A',
    },
    {
      rank: 10,
      name: 'Kevin Onyango',
      initials: 'KO',
      class: 'Grade 8C',
      marks: '475/500',
      average: '95.0%',
      grade: 'A',
    },
  ];

  performers2022 = [
    {
      rank: 1,
      name: 'Angela Chebet',
      initials: 'AC',
      class: 'Grade 8B',
      marks: '497/500',
      average: '99.4%',
      grade: 'A+',
    },
    {
      rank: 2,
      name: 'Patrick Kimani',
      initials: 'PK',
      class: 'Grade 8A',
      marks: '494/500',
      average: '98.8%',
      grade: 'A+',
    },
    {
      rank: 3,
      name: 'Janet Muthoni',
      initials: 'JM',
      class: 'Grade 8C',
      marks: '491/500',
      average: '98.2%',
      grade: 'A+',
    },
    {
      rank: 4,
      name: 'Thomas Ndungu',
      initials: 'TN',
      class: 'Grade 8A',
      marks: '488/500',
      average: '97.6%',
      grade: 'A',
    },
    {
      rank: 5,
      name: 'Linda Achieng',
      initials: 'LA',
      class: 'Grade 8B',
      marks: '486/500',
      average: '97.2%',
      grade: 'A',
    },
    {
      rank: 6,
      name: 'Victor Kamau',
      initials: 'VK',
      class: 'Grade 8C',
      marks: '484/500',
      average: '96.8%',
      grade: 'A',
    },
    {
      rank: 7,
      name: 'Margaret Wangari',
      initials: 'MW',
      class: 'Grade 8A',
      marks: '482/500',
      average: '96.4%',
      grade: 'A',
    },
    {
      rank: 8,
      name: 'Isaac Odhiambo',
      initials: 'IO',
      class: 'Grade 8B',
      marks: '480/500',
      average: '96.0%',
      grade: 'A',
    },
    {
      rank: 9,
      name: 'Rebecca Njoki',
      initials: 'RN',
      class: 'Grade 8C',
      marks: '478/500',
      average: '95.6%',
      grade: 'A',
    },
    {
      rank: 10,
      name: 'George Rotich',
      initials: 'GR',
      class: 'Grade 8A',
      marks: '476/500',
      average: '95.2%',
      grade: 'A',
    },
  ];

  get currentPerformers() {
    switch (this.selectedYear) {
      case 2024:
        return this.performers2024;
      case 2023:
        return this.performers2023;
      case 2022:
        return this.performers2022;
      default:
        return this.performers2024;
    }
  }

  showYear(year: number): void {
    this.selectedYear = year;
  }

  getRankClass(rank: number): string {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return 'rank-other';
  }

  getGradeClass(grade: string): string {
    if (grade.includes('A')) return 'grade-a';
    if (grade.includes('B')) return 'grade-b';
    return 'grade-a';
  }
}
