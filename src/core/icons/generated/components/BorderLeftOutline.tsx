import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderLeftOutline.svg';

export function BorderLeftOutline(props: TProps) {
  return (
    <Icon {...props} name="BorderLeftOutline">
      <SVG />
    </Icon>
  );
}
