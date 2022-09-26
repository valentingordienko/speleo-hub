import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilePDFOutline.svg';

export function FilePDFOutline(props: TProps) {
  return (
    <Icon {...props} name="FilePDFOutline">
      <SVG />
    </Icon>
  );
}
