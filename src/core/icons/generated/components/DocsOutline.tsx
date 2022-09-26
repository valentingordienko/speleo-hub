import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocsOutline.svg';

export function DocsOutline(props: TProps) {
  return (
    <Icon {...props} name="DocsOutline">
      <SVG />
    </Icon>
  );
}
